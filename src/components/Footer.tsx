import { Link, Button } from "@nextui-org/react";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconMail,
    IconBrandInstagram,
} from "@tabler/icons-react";
import { useState } from "react";

const Footer = () => {
    const [isLoadingGithub, setIsLoadingGithub] = useState(false);
    const [isLoadingLinkedin, setIsLoadingLinkedin] = useState(false);
    const [isLoadingInstagram, setIsLoadingInstagram] = useState(false);

    const handleGithubClick = () => {
        setIsLoadingGithub(true);
    };

    const handleLinkedinClick = () => {
        setIsLoadingLinkedin(true);
    };

    const handleInstagramClick = () => {
        setIsLoadingInstagram(true);
    };

    return (
        <div className="flex justify-between w-full">
            <Link href="." color="foreground">
                Thomas Lam
            </Link>
            <div className="flex gap-2">
                <Link href="https://www.instagram.com/t0mmylam">
                    <Button
                        isIconOnly
                        onClick={handleInstagramClick}
                        isLoading={isLoadingInstagram}
                        variant="flat"
                    >
                        <IconBrandInstagram stroke-width="1.25" />
                    </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/lamthomas/">
                    <Button
                        isIconOnly
                        onClick={handleLinkedinClick}
                        isLoading={isLoadingLinkedin}
                        variant="flat"
                    >
                        <IconBrandLinkedin stroke-width="1.25" />
                    </Button>
                </Link>
                <Link href="https://github.com/t0mmylam">
                    <Button
                        isIconOnly
                        onClick={handleGithubClick}
                        isLoading={isLoadingGithub}
                        variant="flat"
                    >
                        <IconBrandGithub stroke-width="1.25" />
                    </Button>
                </Link>
                <Link href="mailto:thomas.lam@columbia.edu">
                    <Button isIconOnly variant="flat">
                        <IconMail stroke-width="1.25" />
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Footer;
