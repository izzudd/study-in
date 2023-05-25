const Footer = () => {
    return (
        <footer className="h-[220px] bg-on-secondary text-on-background pt-10 flex flex-col items-center p-16 text-center gap-9">
            <p>
            Study.IN is optimized for learning, testing, and training. Examples might be simplified to improve reading and basic understanding. Tutorials, references, and examples are constantly 
            reviewed to avoid errors, but we cannot warrant full correctness of all content. While using this site, you agree to have read and accepted our terms of use, cookie and privacy policy.
            Copyright 1999-2023 by Refsnes Data. All Rights Reserved.
            </p>
            <div className="social-media flex gap-4 text-lg">
                <i class="fa-brands fa-square-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-discord"></i>
            </div>
        </footer>
    );
}
 
export default Footer