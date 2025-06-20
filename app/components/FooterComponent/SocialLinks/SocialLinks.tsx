import styles from './SocialLinks.module.scss';
import Image from 'next/image';

const SocialLinks = () => {
  const socialMedia = [
    { name: "Facebook", url: "https://www.facebook.com/share/19GqRdEQ4T/?mibextid=qi2Omg", img: "/facebook.svg", width: 12, height: 19 },
    { name: "Instagram", url: "https://www.instagram.com/accounting_taxservices_pilts?igsh=MXFwNjU5NGJheHlnZw==", img: "/instagram-1.svg", width: 18, height: 18 },
  ];

  return (
    <nav className={styles.linksWrapper} aria-label="Social media links">
      <ul className={styles.links}>
        {socialMedia.map((social) => (
          <li key={social.name}>
            <a
              href={social.url}
              aria-label={social.name}
              target="_blank"
              title={`Visit our ${social.name} page`}
            >
              <Image
                src={social.img}
                alt={`${social.name} icon`}
                width={social.width}
                height={social.height}
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialLinks;
