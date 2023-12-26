import { Link, Button, Tooltip } from "@nextui-org/react";
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
                <Tooltip key="instagram" placement="top" content="Instagram">
                    <Link href="https://www.instagram.com/t0mmylam">
                        <Button
                            isIconOnly
                            onClick={handleInstagramClick}
                            isLoading={isLoadingInstagram}
                            variant="flat"
                        >
                            <IconBrandInstagram strokeWidth="1.25" />
                        </Button>
                    </Link>
                </Tooltip>
                <Tooltip key="linkedin" placement="top" content="LinkedIn">
                    <Link href="https://www.linkedin.com/in/lamthomas/">
                        <Button
                            isIconOnly
                            onClick={handleLinkedinClick}
                            isLoading={isLoadingLinkedin}
                            variant="flat"
                        >
                            <IconBrandLinkedin strokeWidth="1.25" />
                        </Button>
                    </Link>
                </Tooltip>
                <Tooltip key="github" placement="top" content="GitHub">
                    <Link href="https://github.com/t0mmylam">
                        <Button
                            isIconOnly
                            onClick={handleGithubClick}
                            isLoading={isLoadingGithub}
                            variant="flat"
                        >
                            <IconBrandGithub strokeWidth="1.25" />
                        </Button>
                    </Link>
                </Tooltip>
                <Tooltip key="email" placement="top" content="Email">
                    <Link href="mailto:thomas.lam@columbia.edu">
                        <Button isIconOnly variant="flat">
                            <IconMail strokeWidth="1.25" />
                        </Button>
                    </Link>
                </Tooltip>
            </div>
        </div>
    );
};

export default Footer;
