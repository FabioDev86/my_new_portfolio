'use client'
import { useState } from "react";
import {useField, Form, Formik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { useLanguage } from "@/contexts/LanguageProvider";
import text from "../utils/text.json";

export default function Contact(){
    const {language} = useLanguage();
    const [submitStatus, setSubmitStatus] = useState({ state: 'idle', message: '' });
    
    const MyInput = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
            <div className="mx-10 flex flex-col  my-5">                
                <label htmlFor={props.id || props.name} className="self-start"><p className="m-0">{label}</p></label>
                <input className="border-b-4 outline-none dark:bg-stone-900 dark:caret-emerald-400 dark:text-slate-200 bg-zinc-50 border-zinc-200 focus:border-emerald-500 transition-colors py-2" {...field} {...props} />                  
                <div className="text-red-500 text-sm mt-1 h-5 text-left">{ meta.touched && meta.error ? meta.error : null }</div>
            </div>
        );
    };
    const MyTextArea = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
          <div className="mx-10 flex flex-col">          
            <label htmlFor={props.id || props.name} className="self-start"><p className="m-0">{label}</p></label>
            <textarea className="border-b-4 outline-none dark:bg-stone-900 dark:caret-emerald-400 dark:text-slate-200 bg-zinc-50 border-zinc-200 focus:border-emerald-500 transition-colors py-2 min-h-[100px]" {...field} {...props} />
            <div className="text-red-500 text-sm mt-1 h-5 text-left">{ meta.touched && meta.error ? meta.error : null }</div>
          </div>
        );
    };
    async function handleSubmit(values, { setSubmitting, resetForm }){
        setSubmitStatus({ state: 'submitting', message: '' });
        let params = {
            to_name : "Fabio",
            from_name : values.name,
            reply_to : values.email,
            message : values.message
        };
        emailjs.send('service_wsxg3dy', 'template_59d3ypj', params, 'n629mPkgzuzLZfXwH')
            .then((result) => {
                setSubmitStatus({ state: 'success', message: 'Message sent successfully!' });
                setSubmitting(false);
                resetForm();
                setTimeout(() => setSubmitStatus({ state: 'idle', message: '' }), 5000);
            }, (error) => {
                console.error(error);
                setSubmitStatus({ state: 'error', message: 'Failed to send message. Please try again.' });
                setSubmitting(false);
            }
        );
    }       
    return(
        <div id="contact">
            <h1 className="m-0 text-left px-10">{
                    language === 'english' ? text.contact.title.english :
                    language === 'italiano' ? text.contact.title.italiano :
                    text.contact.title.deutsch
                }</h1>
            <div  className="sm:flex">
                <p className="mx-0 my-5 text-left px-10 basis-1/2">{
                    language === 'english' ? text.contact.message.english :
                    language === 'italiano' ? text.contact.message.italiano :
                    text.contact.message.deutsch
                }</p>
                <Formik 
                    initialValues = {{
                        name: '', 
                        email: '',
                        message: ''
                    }}
                    validationSchema = {
                        Yup.object({
                            name: Yup.string().required(
                                language === 'english' ? text.contact.errors.name_required.english :
                                language === 'italiano' ? text.contact.errors.name_required.italiano :
                                text.contact.errors.name_required.deutsch
                            ),
                            email: Yup.string().email(
                                    language === 'english' ? text.contact.errors.valid_email.english :
                                    language === 'italiano' ? text.contact.errors.valid_email.italiano :
                                    text.contact.errors.valid_email.deutsch
                                )
                                .required(
                                    language === 'english' ? text.contact.errors.email_required.english :
                                    language === 'italiano' ? text.contact.errors.email_required.italiano :
                                    text.contact.errors.email_required.deutsch),
                            message: Yup.string().required(
                                language === 'english' ? text.contact.errors.message_required.english :
                                language === 'italiano' ? text.contact.errors.message_required.italiano :
                                text.contact.errors.message_required.deutsch)
                        })
                    }
                    onSubmit = { (values, formikHelpers) => {handleSubmit(values, formikHelpers)}}
                >
                    {({ isSubmitting }) => (
                    <Form className="basis-1/2 sm:flex sm:flex-col mx-4 sm:mx-0 bg-white dark:bg-stone-900 border border-zinc-100 dark:border-stone-800 p-6 sm:p-8 rounded-3xl shadow-sm"> 
                        <MyInput 
                            label={
                                language === 'english' ? text.contact.name_label.english :
                                language === 'italiano' ? text.contact.name_label.italiano :
                                text.contact.name_label.deutsch
                            }
                            name="name"
                            type="text"
                        />
                        <MyInput 
                            label="EMAIL"
                            name="email"
                            type="email"
                        />
                        <MyTextArea 
                            label={
                                language === 'english' ? text.contact.message_label.english :
                                language === 'italiano' ? text.contact.message_label.italiano :
                                text.contact.message_label.deutsch
                            }
                            name="message"
                            type="textarea"
                        />
                        <div className="flex flex-col sm:flex-row justify-between items-center sm:mx-10 mt-8 gap-4">
                            {submitStatus.state === 'success' && <p className="text-emerald-500 m-0 font-medium">{submitStatus.message}</p>}
                            {submitStatus.state === 'error' && <p className="text-red-500 m-0 font-medium">{submitStatus.message}</p>}
                            <div className="flex-1"></div>
                            <button disabled={isSubmitting || submitStatus.state === 'submitting'} type="submit" id="submit" className={`bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg sm:text-lg hover:-translate-y-1 ${(isSubmitting || submitStatus.state === 'submitting') ? 'opacity-70 cursor-not-allowed transform-none' : ''}`}>
                                {isSubmitting || submitStatus.state === 'submitting' ? 'Sending...' : (
                                    language === 'english' ? text.contact.button.english :
                                    language === 'italiano' ? text.contact.button.italiano :
                                    text.contact.button.deutsch
                                )}
                            </button>
                        </div>
                    </Form>
                    )}                
                </Formik>
             </div>
        </div>
    );
}