'use client'
import { useState } from "react";
import {useField, Form, Formik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { useLanguage } from "@/contexts/LanguageProvider";
import text from "../utils/text.json";

export default function Contact(){
    const {language} = useLanguage();
    
    const MyInput = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
            <div className="mx-10 flex flex-col  my-5">                
                <label htmlFor={props.id || props.name} className="self-start"><p className="m-0">{label}</p></label>
                <input className="border-b-4 outline-none dark:bg-stone-900 dark:caret-slate-200 dark:text-slate-200 bg-zinc-100" {...field} {...props} />                  
                <div className="error">{ meta.touched && meta.error ? meta.error : null }</div>
            </div>
        );
    };
    const MyTextArea = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
          <div className="mx-10 flex flex-col">          
            <label htmlFor={props.id || props.name} className="self-start"><p className="m-0">{label}</p></label>
            <textarea className="border-b-4 outline-none dark:bg-stone-900 dark:caret-slate-200 dark:text-slate-200 bg-zinc-100" {...field} {...props} />
            <div className="error">{ meta.touched && meta.error ? meta.error : null }</div>
          </div>
        );
    };
    async function handleSubmit(values){
        let params = {
            to_name : "Fabio",
            from_name : values.name,
            reply_to : values.email,
            message : values.message
        };
        emailjs.send('service_wsxg3dy', 'template_59d3ypj', params, 'n629mPkgzuzLZfXwH')
            .then((result) => {
                alert("Your email has been sent");
            }, (error) => {
                console.log(error.text);
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
                    onSubmit = { values => {handleSubmit(values)}}
                >
                    
                    <Form className="basis-1/2 sm:flex sm:flex-col"> 
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
                        <button type="submit" id="submit" className="dark:text-slate-200 my-10 self-end sm:text-xl sm:mx-10 underline decoration-emerald-400 underline-offset-4 decoration-4">{
                                language === 'english' ? text.contact.button.english :
                                language === 'italiano' ? text.contact.button.italiano :
                                text.contact.button.deutsch
                            }</button>
                    </Form>                
                </Formik>
             </div>
        </div>
    );
}