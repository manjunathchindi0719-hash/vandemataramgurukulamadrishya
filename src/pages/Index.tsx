import { SocialButton } from "@/components/SocialButton";
import { Instagram, Youtube, Facebook, Linkedin, Twitter } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8 text-center">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Manjunath M. Chindi
          </h1>
          <h2 className="text-xl text-muted-foreground">
            Follow me on:
          </h2>
        </div>

        {/* Social Media Links */}
        <div className="space-y-4">
          <SocialButton 
            href="https://instagram.com/manjunath.chindi" 
            variant="instagram"
          >
            <Instagram size={24} />
            Instagram
          </SocialButton>

          <SocialButton 
            href="https://youtube.com/@manjunathchindi" 
            variant="youtube"
          >
            <Youtube size={24} />
            YouTube
          </SocialButton>

          <SocialButton 
            href="https://facebook.com/manjunath.chindi" 
            variant="facebook"
          >
            <Facebook size={24} />
            Facebook
          </SocialButton>

          <SocialButton 
            href="https://linkedin.com/in/manjunathchindi" 
            variant="linkedin"
          >
            <Linkedin size={24} />
            LinkedIn
          </SocialButton>

          <SocialButton 
            href="https://twitter.com/manjunathchindi" 
            variant="twitter"
          >
            <Twitter size={24} />
            X (Twitter)
          </SocialButton>
        </div>
      </div>
    </div>
  );
};

export default Index;