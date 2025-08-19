import { useFormik } from "formik";
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
        type: "mail",
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
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            mail: "",
            message: "",
        },
        onSubmit: values => {
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Required"),
            lastName: Yup.string().required("Required"),
            mail: Yup.string().required("Required").email("Invalid e-mail format"),
            message: Yup.string().required("Required").min(25, "Your message must be at least 25 characters long"),
        }),
    });

    const displayFields = formFields.map(field => {
        const Component = field.inputType === "input" ? "input" : "textarea";

        return (
        <fieldset>
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
                defaultValue={formik.values[field.name]}
                required
                className={formik.touched[field.name] && formik.errors[field.name] ? ("invalid-field") : ("")}
            />
        </fieldset>
        );
    });

    return (
        <article>
            <form onSubmit={formik.handleSubmit}>
                {displayFields}
                <button type="submit" aria-label="Submit contact form" style={{margin:"auto"}} className='cta'>Confirm</button>
            </form>
        </article>
    );
};

export default Form;