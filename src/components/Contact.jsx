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
                <label htmlFor={props.id || props.name}><p>{label}</p></label>
                <input className={"border-4 " + (meta.touched && meta.error ? "border-red-600" : "border-emerald-400")} {...field} {...props} />                  
                <div className="error">{ meta.touched && meta.error ? meta.error : null }</div>
            </div>
        );
    };
    const MyTextArea = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
          <div className="mx-10 flex flex-col">          
            <label htmlFor={props.id || props.name}><p>{label}</p></label>
            <textarea className={" h-40 border-4 " + (meta.touched && meta.error ? "border-red-600" : "border-emerald-400")} {...field} {...props} />
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
                
                <Form>
                    <MyInput 
                        label="Your name"
                        name="name"
                        type="text"
                    />
                    <MyInput 
                        label="Your Email"
                        name="email"
                        type="email"
                    />
                    <MyTextArea 
                        label="Your message"
                        name="message"
                        type="textarea"
                    />
                    <button type="submit" id="submit" className="dark:text-slate-200 my-10 sm:self-start sm:text-xl sm:mx-10 underline decoration-emerald-400 underline-offset-4 decoration-4">SUBMIT</button>
                </Form>
                
             </Formik>
        </div>
    );
}