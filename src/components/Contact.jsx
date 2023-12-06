'use client'
import { useState } from "react";
import {useField, Form, Formik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

export default function Contact(){

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
            <h1 className="m-0 text-left px-10">Contact</h1>
            <div  className="sm:flex">
                <p className="mx-0 my-5 text-left px-10 basis-1/2">I like challenging and ambitious projects. Let me know how I can help you: fill in the form, and I'll get back to you as soon as possible.</p>
                <Formik 
                    initialValues = {{
                        name: '', 
                        email: '',
                        message: ''
                    }}
                    validationSchema = {
                        Yup.object({
                            name: Yup.string().required("Name required"),
                            email: Yup.string().email("Please insert valid email").required("Email required"),
                            message: Yup.string().required("Please write your message")
                        })
                    }
                    onSubmit = { values => {handleSubmit(values)}}
                >
                    
                    <Form className="basis-1/2 sm:flex sm:flex-col"> 
                        <MyInput 
                            label="NAME"
                            name="name"
                            type="text"
                        />
                        <MyInput 
                            label="EMAIL"
                            name="email"
                            type="email"
                        />
                        <MyTextArea 
                            label="MESSAGE"
                            name="message"
                            type="textarea"
                        />
                        <button type="submit" id="submit" className="dark:text-slate-200 my-10 self-end sm:text-xl sm:mx-10 underline decoration-emerald-400 underline-offset-4 decoration-4">SEND MESSAGE</button>
                    </Form>                
                </Formik>
             </div>
        </div>
    );
}