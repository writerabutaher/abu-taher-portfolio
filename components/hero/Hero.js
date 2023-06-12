import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import styles from "./hero.module.scss";
import profile from '../../assets/profile.png'
import Image from 'next/image'
import { Typewriter } from "react-simple-typewriter";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={`${styles.copyWrapper} flex flex-col justify-between items-center md:flex-row-reverse gap-20`}>
        <Reveal>
          <div className='flex justify-center'>
            <Image className='w-[40rem]' src={profile} alt='profile' />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <h1 className={styles.title}>
              Hey, I&apos;m Abu Taher<span>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className={styles.subTitle}>
              <Typewriter
                cursor
                delaySpeed={1000}
                deleteSpeed={25}
                loop={0}
                typeSpeed={75}
                words={[
                  'React Developer',
                  'Front-End Developer',
                  'MERN Stack Developer',
                ]}
              />
            </h2>
          </Reveal>
          <Reveal>
            <p className={styles.aboutCopy}>
              I am equipped to build scalable and efficient web applications. Having successfully completed multiple projects with a focus on team collaboration, project management, and delivering high-quality work.
            </p>
          </Reveal>
          <Reveal>
            <StandardButton
              onClick={() => document.getElementById("contact")?.scrollIntoView()}
            >
              Contact me
            </StandardButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
