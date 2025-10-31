import { SocialButton } from "@/components/SocialButton";
import { Instagram, Youtube, Facebook, Linkedin, Twitter, Play } from "lucide-react";
import thumbnailImage from "@/assets/youtube-thumbnail.jpg";
import logoImage from "@/assets/vande-mataram-logo.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-6">
            <img 
              src={logoImage} 
              alt="Vande Mataram Gurukulam Logo" 
              className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-full shadow-[var(--shadow-soft)]"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            Vande Mataram Gurukulam
          </h1>
          <h2 className="text-xl md:text-2xl italic text-muted-foreground">
            An initiative by Adrishya
          </h2>
        </div>

        {/* YouTube Thumbnail & Action Buttons */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
          {/* Left: YouTube Thumbnail */}
          <div className="flex justify-center md:justify-end">
            <a
              href="https://youtu.be/9tc7O1oqjC0?si=blUefemaQ91QzhIO"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden rounded-lg shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)] hover:scale-[1.02]"
            >
              <div className="relative">
                <img 
                  src={thumbnailImage} 
                  alt="Vande Mataram Gurukulam Journey Video"
                  className="w-80 h-48 md:w-96 md:h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-[var(--transition-smooth)] flex items-center justify-center">
                  <div className="w-16 h-16 bg-youtube rounded-full flex items-center justify-center group-hover:scale-110 transition-[var(--transition-smooth)]">
                    <Play size={24} fill="white" className="text-white ml-1" />
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Right: Action Buttons */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <a
              href="https://www.vandemataramgurukulam.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-md px-6 py-4 rounded-lg font-semibold text-lg bg-primary text-primary-foreground shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)] hover:scale-[1.02] active:scale-[0.98] text-center"
            >
              Visit Our Official Website
            </a>
            <a
              href="https://www.vandemataramgurukulam.org/support"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-md px-6 py-4 rounded-lg font-semibold text-lg bg-secondary text-secondary-foreground shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)] hover:scale-[1.02] active:scale-[0.98] text-center"
            >
              For Donation / Seva
            </a>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Vande Mataram Gurukulam Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground text-center">
              Vande Mataram Gurukulam
            </h3>
            <div className="space-y-4">
              <SocialButton 
                href="https://www.instagram.com/vandemataram_gurukulam/" 
                variant="instagram"
              >
                <Instagram size={24} />
                Instagram
              </SocialButton>

              <SocialButton 
                href="https://www.youtube.com/@vandemataramgurukulam2466" 
                variant="youtube"
              >
                <Youtube size={24} />
                YouTube
              </SocialButton>

              <SocialButton 
                href="https://www.facebook.com/p/Vande-Mataram-Gurukulam_-100089345387911/" 
                variant="facebook"
              >
                <Facebook size={24} />
                Facebook
              </SocialButton>

              <SocialButton 
                href="https://in.linkedin.com/company/vande-mataram-gurukulam" 
                variant="linkedin"
              >
                <Linkedin size={24} />
                LinkedIn
              </SocialButton>

              <SocialButton 
                href="https://x.com/VM_Gurukulam" 
                variant="twitter"
              >
                <Twitter size={24} />
                X (Twitter)
              </SocialButton>
            </div>
          </div>

          {/* Adrishya Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground text-center">
              Adrishya
            </h3>
            <div className="space-y-4">
              <SocialButton 
                href="https://www.instagram.com/adrishya_47/" 
                variant="instagram"
              >
                <Instagram size={24} />
                Instagram
              </SocialButton>

              <SocialButton 
                href="https://www.youtube.com/@adrishya9507" 
                variant="youtube"
              >
                <Youtube size={24} />
                YouTube
              </SocialButton>

              <SocialButton 
                href="https://www.facebook.com/profile.php?id=100067102712667" 
                variant="facebook"
              >
                <Facebook size={24} />
                Facebook
              </SocialButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;