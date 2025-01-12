import { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

type TVisibility = {
    isVisible: boolean
}

type TSkill = {
    name: string,
    level: number,
    category: string
}

const Skills = () => {
    return (
        <div className="skills-wrap">

            <h4>{categories.A}</h4>
            <SkillList category={categories.A} />

            <h4>{categories.B}</h4>
            <SkillList category={categories.B} />

            <h4>{categories.C}</h4>
            <SkillList category={categories.C} />

            <h4>{categories.D}</h4>
            <SkillList category={categories.D} />

            <h4>{categories.E}</h4>
            <SkillList category={categories.E} />

        </div>
    );
}

const SkillList = ({ category }: { category: string }) => {
    const [hasBeenVisible, setHasBeenVisible] = useState(false);

    const onChange = (isVisible: boolean) => {
        if (isVisible && !hasBeenVisible) {
            setHasBeenVisible(true);
        }
    };

    return (
        <VisibilitySensor onChange={onChange} minTopValue={40} partialVisibility>

            <ul className={`skills-list list-reset ${hasBeenVisible ? 'in-view' : ''}`}>
                {skillsArr.map((skill: TSkill) => {
                    if (skill.category === category) {
                        return (
                            <SkillBar skill={skill} />
                        );
                    }
                })}
            </ul>
        </VisibilitySensor>
    );

}


const SkillBar = ({ skill }: { skill: TSkill }) => {
    const { name, level, category } = skill;
    const percentVal = level / 10 * 100;

    return (

        <li className={`skill-bar`}>
            <span className="skill-bar__text">{name}</span>
            <span className="sr-only"> proficiency ${percentVal} percent</span><div className={`skill-bar__bar width-${level}`}></div>
        </li>
    );
}

export default Skills;

const categories = {
    'A': "Languages",
    'B': "Frameworks and Libraries",
    'C': "Design and Collablration",
    'D': "Platforms and CMS",
    'E': "Workflow and Quality"
}

const skillsArr: TSkill[] = [
    {
        name: 'HTML',
        category: categories.A,
        level: 10
    },
    {
        name: 'JavaScript',
        category: categories.A,
        level: 10
    },
    {
        name: 'TypeScript',
        category: categories.A,
        level: 8
    },
    {
        name: 'React',
        category: categories.B,
        level: 8
    },
    {
        name: 'Redux',
        category: categories.B,
        level: 6
    },
    {
        name: 'jQuery',
        category: categories.B,
        level: 9
    },
    {
        name: 'CSS',
        category: categories.A,
        level: 10
    },
    {
        name: 'SCSS/Sass',
        category: categories.A,
        level: 10
    },
    {
        name: 'Bootstrap',
        category: categories.B,
        level: 6
    },
    {
        name: 'Unit Testing (Jest, Enzyme)',
        category: categories.E,
        level: 6
    },
    {
        name: 'Accessibility Best Practices',
        category: categories.E,
        level: 8
    },
    {
        name: 'Code Reviews',
        category: categories.E,
        level: 8
    },
    {
        name: 'Custom CMS',
        category: categories.D,
        level: 10
    },
    {
        name: 'Contentful',
        category: categories.D,
        level: 4
    },
    {
        name: 'Shopify Theme Development',
        category: categories.D,
        level: 7
    },
    {
        name: 'API Integration',
        category: categories.A,
        level: 10
    },
    {
        name: 'Figma',
        category: categories.C,
        level: 8
    },
    {
        name: 'Photoshop',
        category: categories.C,
        level: 6
    },
    {
        name: 'Git',
        category: categories.C,
        level: 8
    },
    {
        name: 'Agile Development',
        category: categories.E,
        level: 6
    },
    {
        name: 'Next.js',
        category: categories.B,
        level: 4
    },
    {
        name: 'Shopify App Development',
        category: categories.D,
        level: 4
    },
    {
        name: 'WordPress Theme Development',
        category: categories.D,
        level: 2
    },
    {
        name: 'PHP',
        category: categories.A,
        level: 1
    },
    {
        name: 'Salesforce Commerce Cloud',
        category: categories.D,
        level: 2
    },
    {
        name: 'Webflow',
        category: categories.D,
        level: 4
    },
    {
        name: 'C#',
        category: categories.A,
        level: 3
    },
    {
        name: 'Node.js',
        category: categories.A,
        level: 3
    },
    {
        name: 'Data Visualization (D3.js)',
        category: categories.B,
        level: 3
    },
    {
        name: 'Web Design',
        category: categories.C,
        level: 6
    },
    {
        name: 'Responsive Design',
        category: categories.C,
        level: 10
    },
]
