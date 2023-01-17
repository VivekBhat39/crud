import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form1() {
    let { id } = useParams();

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate();

    function handleChange(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if (id !== undefined) {
            axios.get("https://636fbce4f2ed5cb047e426ee.mockapi.io/api/crud/" + id)
                .then((res) => {
                    setData({ name: res.data.name, email: res.data.email })
                })
        }
    }, [id])

    function submit(e) {
        e.preventDefault()
        if (id === undefined) {
            axios.post("https://63c663fcd307b76967380f55.mockapi.io/crud", data)
                .then((res) => {
                    // console.log(res.data.data);
                    navigate('/list');
                })
        } else {
            axios.put("https://63c663fcd307b76967380f55.mockapi.io/crud/" + id, data)
                .then((res) => {
                    // console.log(res.data.data);
                    navigate('/list');
                })
        }
        notify()
    }

    function notify() {
        toast.success('Data Saved Succesfully', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return (
        <div className="Container-fluid">
            <div className="row mt-5">
                <div className="col-lg-3"></div>
                <div className="col-lg-5">
                    <form>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form1Example1">Name</label>
                            <input type="fir" name="name" value={data.name} onChange={(e) => handleChange(e)} className="form-control" />
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form1Example2">Email</label>
                            <input type="email" name="email" value={data.email} onChange={(e) => handleChange(e)} className="form-control" />
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form1Example2">Password</label>
                            <input type="password" name="password" value={data.password} onChange={(e) => handleChange(e)} className="form-control" />
                        </div>

                        <div className="row mb-4">
                            <div className="col">
                                <a href="/">Forgot password?</a>
                            </div>
                        </div>

                        <button type="submit" onClick={(e) => submit(e)} className="btn btn-primary btn-block">Submit</button>
                    </form>
                    <button onClick={(e) => notify(e)}>notify</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Form1;