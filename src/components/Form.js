import { useFormik } from "formik";
import { useState, useEffect } from "react";
import * as Yup from 'yup';

const formFields = [
    {
        label: "First Name",
        placeholder: "Your first name",
        type: "text",
        inputType: "input",
        name: "firstName",
    },
    {
        label: "Last Name",
        placeholder: "Your last name",
        type: "text",
        inputType: "input",
        name: "lastName",
    },
    {
        label: "E-mail Address",
        placeholder: "Your e-mail address",
        type: "email",
        inputType: "input",
        name: "mail",
    },
    {
        label: "Message",
        placeholder: "Your message",
        type: "text",
        inputType: "textarea",
        name: "message",
    },
];

function Form() {
    const [serverMessage, setServerMessage] = useState(null);
    useEffect(() => {
    if (serverMessage) {
        const timer = setTimeout(() => setServerMessage(null), 4000);
        return () => clearTimeout(timer);
    }
}, [serverMessage]);
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            mail: "",
            message: "",
        },
        onSubmit: async (values, { resetForm, setSubmitting }) => {
            console.log("Form datas sent");
            console.log(`First name : ${values.firstName}, Last name : ${values.lastName}, Email : ${values.mail}, Comment : ${values.message}`)
            try {
                const res = await fetch('/form.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(values),
                })

                if (res.ok) {
                    setServerMessage({ type: "success", text: "Message sent successfully!" });
                    resetForm();
                } else {
                    const error = await res.json();
                    setServerMessage({ type: "error", text: error.error });
                    console.error(error.error);
                }
            } catch (err) {
                console.error("Network error", err);
                setServerMessage({ type: "error", text: "Something went wrong. Please try again later." });
            } finally {
                setSubmitting(false);
            }
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Required"),
            lastName: Yup.string().required("Required"),
            mail: Yup.string().required("Required").email("Invalid e-mail format"),
            message: Yup.string().required("Required").min(20, "Your message must be at least 20 characters long"),
        }),
    });

    const displayFields = formFields.map(field => {
        const Component = field.inputType === "input" ? "input" : "textarea";

        return (
        <fieldset key={field.name}>
            <label htmlFor={field.name}>
                {field.label}
                <span>{formik.touched[field.name] && formik.errors[field.name] && (
                    <div className="error">{formik.errors[field.name]}</div>
                )}</span>
            </label>
            <Component
                placeholder={field.placeholder}
                name={field.name}
                id={field.name}
                type={field.type}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values[field.name]}
                required
                className={formik.touched[field.name] && formik.errors[field.name] ? ("invalid-field") : ("")}
            />
        </fieldset>
        );
    });

    return (
        <>
            {serverMessage && (
                <p role="alert" className={serverMessage.type === "error" ? "error-popup" : "success-popup"}>
                    {serverMessage.text}
                </p>
            )}
            <article>
                <form onSubmit={formik.handleSubmit}>
                    {displayFields}
                    <button
                    type="submit"
                    aria-label="Submit contact form"
                    style={{marginLeft:"auto", marginRight:"auto", marginTop:"auto", marginBottom:"2rem"}}
                    disabled={formik.isSubmitting}
                    className='cta'
                    >
                        {formik.isSubmitting ? "Sending..." : "Confirm"}
                    </button>
                </form>
            </article>
        </>
    );
};

export default Form;