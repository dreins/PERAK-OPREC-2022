import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import getConfig from 'next/config'
import Image from "next/image";
import React from "react";
import Modal from "../Modals/Modals";
import ImageUpload from "../Modals/ImageUpload";

function RegisterPage() {
    const [NamaLengkap, setNamaLengkap] = useState('')
    const [NamaPanggilan, setNamaPanggilan] = useState('')
    const [Npm, setNpm] = useState('')
    const [Contact, setContact] = useState('')
    const [modalOpen, setModalOpen] = useState(false);

    async function handleRegister() {
        const registerInfo = {
            NamaLengkap: NamaLengkap,
            NamaPanggilan: NamaPanggilan,	
            Npm: Npm,
            IdLine: Contact,
        }
        const register = await fetch('http://localhost:1337/api/registration-detail', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerInfo)
        })
    
        const registerResponse = await register.json();
        console.log(registerResponse)
    }
    return (
        <form class="w-full max-w-sm">
            <div class="md:flex md:items-center mb-6">
            <div class="mt-4">
                <div class="mt-2 px-10">
                    <label class="inline-flex items-center">
                    <input type="radio" class="form-radio" name="accountType" value="Elemen"/>
                    <span class="ml-2">Elemen Staf / Dosen</span>
                    </label>
                    <label class="inline-flex items-center ml-6">
                        <input type="radio" class="form-radio" name="accountType" value="Mahasiswa"/>
                    <span class="ml-2">Mahasiswa</span>
                    </label>
                </div>
                </div>
            </div>
            <div class="md:items-start mb-6">
                <div class="px-10">
                    <label class="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" placeholder="Nama Lengkap">
                        Nama Lengkap
                    </label>
                </div>
                
            <div class="px-10">
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name= "NamaLengkap" id="NamaLengkap" type="text" value={NamaLengkap} onChange={e => setNamaLengkap(e.target.value) } placeholder="Nama Lengkap"/>
            </div>
            </div>
            <div class="md:items-center mb-6">
                <div class="px-10">
                    <label class="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" for="inline-password">
                        Nama Panggilan
                    </label>
                </div>
            <div class="px-10">
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name= "NamaPanggilan" id="NamaPanggilan" type="text" value={NamaPanggilan} onChange={e => setNamaPanggilan(e.target.value) } placeholder="Nama Panggilan"/>
            </div>
            </div>
            <div class=" md:items-center mb-6 px-10">
                <div class="">
                    <label class="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" for="inline-password">
                        Profile Picture
                    </label>
                </div>
            </div>
            <div class="px-10 py-10">
                <ImageUpload/>
            </div>
            <div class="md:items-start mb-6">
                <div class=" px-10">
                    <label class="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" for="inline-full-name">
                        NPM
                    </label>
                </div>
            <div class="px-10">
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name= "Npm" id="Npm" type="text" value={Npm} onChange={e => setNpm(e.target.value) } placeholder="NPM Anda"/>
            </div>
            </div>
            <div class="md:items-start mb-6">
                <div class="px-10">
                    <label class="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" for="inline-full-name">
                        ID LINE / Whats App
                    </label>
                </div>
            <div class="px-10">
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name= "Contact" id="Contact" type="text" value={Contact} onChange={e => setContact(e.target.value) } placeholder="Kontak yang dapat dihubungi"/>
            </div>
            </div>
                <div class="md:flex md:items-center px-10 py-10">
                <div class=""></div>
                <div class="">
                    <button class="focus: bg-green-100 outline hover:outline-2 text-white font-bold py-2 px-4 rounded" onClick={() => setModalOpen(true)} type="button" >
                        Daftar Sekarang
                    </button>
                    {modalOpen && <Modal setOpenModal={setModalOpen} onClick={() => handleRegister} />}
                            
                </div>
            </div>
            <div className="py-2">
                <Link href='/'>
                <button class="focus: bg-green-100 outline hover:outline-2 text-white font-bold py-2 px-4 rounded" onClick={() => setModalOpen(true)} type="button" >
                    Back
                </button>
                </Link>
                </div>
            
        </form>
    )
}

export default RegisterPage
