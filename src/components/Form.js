import { useFormik } from "formik";
import * as Yup from 'yup';

function Form() {
    const Formik = useFormik({
        initialValues: {

        },
        onSubmit: values => {

        },
        validationSchema: Yup.object(

        ),
    });
    return (
        <article>
            <form>
                <fieldset>
                    <label>
                        First Name
                    </label>
                    <input
                    placeholder="Your first name"
                    />
                </fieldset>
                <fieldset>
                    <label>
                        Last Name
                    </label>
                    <input
                    placeholder="Your last name"
                    />
                </fieldset>
                <fieldset>
                    <label>
                        E-Mail Address
                    </label>
                    <input
                    placeholder="Your e-mail address"
                    />
                </fieldset>
                <fieldset>
                    <label>
                        Your Message
                    </label>
                    <textarea
                    placeholder="Your message"
                    />
                </fieldset>
            </form>
        </article>
    );
};

export default Form;