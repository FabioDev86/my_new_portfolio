'use client'
import { useState } from "react";
import {useField, Form, Formik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

export default function Contact(){

    const MyInput = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
            <div className="input-box">                
                <label htmlFor={props.id || props.name}><p>{label}</p></label>
                <input className="input" {...field} {...props} />                  
                <div className="text-red-600">{ meta.touched && meta.error ? meta.error : null }</div>
            </div>
        );
    };
    const MyTextArea = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
          <div className="input-box">          
            <label htmlFor={props.id || props.name}><p>{label}</p></label>
            <textarea className="input" {...field} {...props} />
            <div className="text-red-600">{ meta.touched && meta.error ? meta.error : null }</div>
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
                    <button type="submit" id="submit"><h1>Submit</h1></button>
                </Form>
                
             </Formik>
        </div>
    );
}