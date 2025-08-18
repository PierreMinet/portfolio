import { useFormik } from "formik";
import * as Yup from 'yup';

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
        validationSchema: Yup.object(

        ),
    });
    return (
        <article>
            <form onSubmit={formik.handleSubmit}>
                <fieldset>
                    <label htmlFor="firstName">
                        First Name
                    </label>
                    <input
                    placeholder="Your first name"
                    name="firstName"
                    id="firstName"
                    type="text"
                    onBlur={formik.handleBlur}
                    defaultValue={formik.values.firstName}
                    required
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName">
                        Last Name
                    </label>
                    <input
                    placeholder="Your last name"
                    name="lastName"
                    id="lastName"
                    type="text"
                    onBlur={formik.handleBlur}
                    defaultValue={formik.values.lastName}
                    required
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="mail">
                        E-Mail Address
                    </label>
                    <input
                    placeholder="Your e-mail address"
                    name="mail"
                    id="mail"
                    type="email"
                    onBlur={formik.handleBlur}
                    defaultValue={formik.values.mail}
                    required
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="message">
                        Your Message
                    </label>
                    <textarea
                    placeholder="Your message"
                    name="message"
                    id="message"
                    type="text"
                    onBlur={formik.handleBlur}
                    defaultValue={formik.values.message}
                    required
                    />
                </fieldset>
            </form>
        </article>
    );
};

export default Form;