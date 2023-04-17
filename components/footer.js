import Link from "next/link";
import BackToTopButton from '../components/BackToTopButton';

export default function Footer({ events }) {
  return (
    <footer className="w-full my-8">
      
       {/* To the top button */}
       <div className="text-center lil-text mt-8">
       
        
      </div>

      <div className="text-center lil-text mt-8">
        Powered by{" "}
        <Link href="https://github.com/lllyasviel/ControlNet" target="_blank">
          ControlNet
        </Link>{" "}
        by{" "}
        <Link
          href="https://lllyasviel.github.io/Style2PaintsResearch/lvmin"
          target="_blank"
        >
          Lyumin Zhang
        </Link>
        ,{" "}
        <Link
          href="https://github.com/axemanks"
          target="_blank"
        >
          Keith Scheldt
        </Link>
        ,{" "}
        <Link
          href="https://replicate.com/rossjillian/controlnet?utm_source=project&utm_campaign=scribblediffusion"
          target="_blank"
        >
          Replicate
        </Link>
        ,{" "}
        <Link href="https://vercel.com/templates/ai" target="_blank">
          Vercel
        </Link>
        , and{" "}
        <Link href="https://upload.io" target="_blank">
          Upload
        </Link>
        .
      </div>
    </footer>
    
  );
}
