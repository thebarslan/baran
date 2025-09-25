import React from "react";
import ProfieImage from "@/assets/images/baran.jpeg";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";
const Profile = () => {
   return (
      <div className="profile flex lg:gap-8 gap-6 h-[128px]">
         <div className="profile-image-container lg:h-32 lg:w-32 w-24 h-32 shrink-0 lg:mt-0 mt-2">
            <Image
               src={ProfieImage}
               alt="Profile"
               width={1200}
               height={1200}
               className="rounded-full lg:h-32 lg:w-32 w-24 h-24 shadow-lg object-cover shrink-0"
            />
         </div>
         <div className="profile-info-container flex flex-col gap-1 justify-center">
            <h1 className="lg:text-2xl text-xl font-bold">Baran Arslan</h1>
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
