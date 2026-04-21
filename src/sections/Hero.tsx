export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0">
                <img 
                    src="/hero-bg.jpg" 
                    alt="Hero Image" 
                    className="w-full h-full object-cover opacity-40"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>
            </div>

         {/* Content  */}
         <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grip-cols-2 gap-12 items-center">
                {/* Left column (text content*/}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-foreground">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Software Engineer / AI Operations Engineer 
                        </span>
                    </div>
                </div>
                {/* Right column (profile image) */}
            </div>
         </div>
        </section>
    )
}