import { useState } from "react"
import axios from "axios";

export default function Register(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleChange = (event:any)=>{
        event.preventDefault();
        if(event.target.name == 'email')
            setEmail(event.target.value)
        if(event.target.name == 'password')
            setPassword(event.target.value)
        if(event.target.name == 'phone')
            setPhone(event.target.value)
        if(event.target.name == 'confirmPassword')
            setConfirmPassword(event.target.value)
    }

    const handleSubmit = async ()=>{
        const res = await axios.post('http://localhost:3000/api/auth/register', {
            email: email,
            phone: phone,
            password: password,
            confirmPassword: confirmPassword
        });

        if(res.status === 200)
            console.log("Registration successful");
        else
            console.log("Registration failed");

    }

    return <div className="max-w-2xl mx-auto">
	<div
		className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
		<form className="space-y-6" action="#" onSubmit={handleSubmit}>
			<h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
			<div>
				<label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
				<input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" value={email} onChange={handleChange}/>
            </div>
			<div>
				<label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Phone number</label>
				<input type="text" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" value={phone} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={password} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={confirmPassword} onChange={handleChange}/>
            </div>
            
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create account</button>
		</form>
	</div>
	</div>
}