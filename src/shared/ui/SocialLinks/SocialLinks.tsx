import {
  InstagramLogo,
  FacebookLogo,
  TiktokLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import styles from "./socialLinks.module.scss";

interface SocialLinksProps {
  iconSize: number;
  className?: string;
}
const SocialLinks: React.FC<SocialLinksProps> = ({ className, iconSize }) => {
  const socialLinks = [
    {
      icon: <InstagramLogo size={iconSize} />,
    },
    {
      icon: <FacebookLogo size={iconSize} />,
    },
    {
      icon: <TiktokLogo size={iconSize} />,
    },
    {
      icon: <YoutubeLogo size={iconSize} />,
    },
  ];
  return (
    <>
      <div className={styles.socialLinks}>
        {socialLinks.map((item, index) => (
          <li key={index} className={className}>
            {item.icon}
          </li>
        ))}
      </div>
    </>
  );
};
export default SocialLinks;
