import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const Contact = () => {

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    // Handler for input field changes
    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value,
        }));
    };

    const onFormSubmit = async(event) => {
        event.preventDefault()
        setLoading(true)
        const formData = new FormData(event.target)
        formData.append("access_key", "31904935-7054-446a-b482-04ea5d153181")

        const object = Object.fromEntries(formData)
        const json = JSON.stringify(object)

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        })

        const web3Response = await response.json()

        if (web3Response.success) {
            setFormData({ name: "", email: "", subject: "", message: "" });
            setLoading(false)
            
            setTimeout(() => {
              successText.style.display = 'none'
            }, 5000)
          }
    
    }

    return (
        <dialog id="my_modal_4" className="modal">
            <div className="modal-box max-w-3xl">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                
                <h1 className='mb-2 mt-3'>Contact</h1>
                <p className="py-4">Need a cool website or web app like this one? Feel free to reach out at any time!</p>

                <form action="" onSubmit={onFormSubmit}>
                    <input type="hidden" name="from_name" value="Galaxy Snapshot User" />
                    <input type="hidden" name="replyto" value="nathanweb.dev@proton.me" />
                    <div className="flex flex-col gap-3 md:flex-row w-full">
                        <label className="input input-bordered flex items-center gap-2">
                            Name
                            <input 
                                type="text" 
                                name="name"
                                id="name"
                                className="grow placeholder-opacity-75" 
                                placeholder="Required"
                                onChange={handleInputChange}
                                value={formData.name}
                                required 
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Email
                            <input
                                name="email"
                                id="email" 
                                type="email" 
                                className="grow placeholder-opacity-75" 
                                placeholder="Required"
                                onChange={handleInputChange}
                                value={formData.email}
                                required
                            />
                        </label>
                    </div>
                    <textarea
                        name="message"
                        id="message" 
                        className="textarea textarea-bordered w-full mt-7 h-56 md:textarea-md lg:textarea-lg placeholder-opacity-75" 
                        placeholder="Your message..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                    <button className="btn btn-outline btn-primary mt-5 w-full md:w-1/2 lg:w-1/4">
                        <div className="flex justify-around gap-3 items-center">
                            {loading ? 
                            <>
                                <span>Sending Message</span>
                                <span className="loading loading-spinner loading-sm"></span>
                            </>
                            : 
                            <>
                                <span>Send Message</span>
                                <Icon icon="ri:mail-send-line" className='cursor-pointer text-lg'/>
                            </>
                            }
                        </div>
                    </button>
                </form>
                
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Close</button>
                    </form>
                </div> 
            
            </div> 
        </dialog>
    )
}

export default Contact