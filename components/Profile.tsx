import React from "react";
import ProfieImage from "@/assets/images/baran.jpg";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";
const Profile = () => {
   return (
      <div className="profile flex gap-8 h-[128px]">
         <div className="profile-image-container h-32 w-32 shrink-0">
            <Image
               src={ProfieImage}
               alt="Profile"
               width={128}
               height={128}
               className="rounded-full h-32 w-32 shadow-2xl object-cover shrink-0"
            />
         </div>
         <div className="profile-info-container flex flex-col gap-1 justify-center">
            <h1 className="text-2xl font-bold">Baran Arslan</h1>
            <p className="text-sm text-secondary-foreground">
               Full Stack & Mobile Developer
            </p>
            <p className="text-[13px] text-secondary-foreground">
               Co-founder & Lead Developer{" "}
               <Link href="https://openpet.app" className="text-green-400">
                  @OpenPet
               </Link>
            </p>
            <div className="social-icons flex gap-4 mt-3 text-muted-foreground">
               <Link href="https://github.com/thebarslan">
                  <FiGithub size={20} />
               </Link>
               <Link href="https://x.com/baranarslan096">
                  <FaXTwitter size={20} />
               </Link>
               <Link href="https://www.linkedin.com/in/baran-arslan-dev/">
                  <FaLinkedinIn size={20} />
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Profile;
