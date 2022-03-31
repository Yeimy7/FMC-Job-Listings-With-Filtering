import './style/App.css'
import { Card } from './components/Card';
import { Search } from './components/Search';
import photosnap from './images/photosnap.svg';
import manage from './images/manage.svg';
import account from './images/account.svg';
import myhome from './images/myhome.svg';
import loop from './images/loop-studios.svg';
import faceit from './images/faceit.svg';
import shortly from './images/shortly.svg';
import insure from './images/insure.svg';
import eyecam from './images/eyecam-co.svg';
import air from './images/the-air-filter-company.svg';
import { useEffect, useState } from 'react';

// import {ReactComponent as photosnap} from './images/photosnap.svg'

function App() {
  const cards = [
    {
      uid: 11,
      logo: photosnap,
      name: 'Photosnap',
      new_ad: true,
      featured: true,
      training: 'Senior Frontend Developer',
      day: '1d ago',
      schedule: 'Full time',
      site: 'USA only',
      tags: ['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript']
    }
    ,
    {
      uid: 22,
      logo: manage,
      name: 'Manage',
      new_ad: true,
      featured: true,
      training: 'Fullstack Developer',
      day: '1d ago',
      schedule: 'Part time',
      site: 'Remote',
      tags: ['Fullstack', 'Midweight', 'Python', 'React']
    },
    {
      uid: 33,
      logo: account,
      name: 'Account',
      new_ad: true,
      featured: false,
      training: 'Junior Frontend Developer',
      day: '2d ago',
      schedule: 'Part time',
      site: 'USA only',
      tags: ['Frontend', 'Junior', 'JavaScript', 'React', 'Sass']
    },
    {
      uid: 44,
      logo: myhome,
      name: 'MyHome',
      new_ad: false,
      featured: false,
      training: 'Junior Frontend Developer',
      day: '5d ago',
      schedule: 'Contract',
      site: 'USA only',
      tags: ['Frontend', 'Junior', 'CSS', 'JavaScript']
    },
    {
      uid: 55,
      logo: loop,
      name: 'Loop Studios',
      new_ad: false,
      featured: false,
      training: 'Software Engineer',
      day: '1w ago',
      schedule: 'Full time',
      site: 'Worldwide',
      tags: ['Fullstack', 'Midweight', 'JavaScript', 'Ruby', 'Sass']
    },
    {
      uid: 66,
      logo: faceit,
      name: 'FaceIt',
      new_ad: false,
      featured: false,
      training: 'Junior Backend Developer',
      day: '2w ago',
      schedule: 'Full time',
      site: 'UK only',
      tags: ['Backend', 'Junior', 'Ruby', 'RoR']
    },
    {
      uid: 77,
      logo: shortly,
      name: 'Shortly',
      new_ad: false,
      featured: false,
      training: 'Junior Developer',
      day: '2w ago',
      schedule: 'Full time',
      site: 'Worldwide',
      tags: ['Frontend', 'Junior', 'HTML', 'JavaScript', 'Sass']
    },
    {
      uid: 88,
      logo: insure,
      name: 'Insure',
      new_ad: false,
      featured: false,
      training: 'Junior Frontend Developer',
      day: '2w ago',
      schedule: 'Full time',
      site: 'USA only',
      tags: ['Frontend', 'Junior', 'JavaScript', 'Vue', 'Sass']
    },
    {
      uid: 99,
      logo: eyecam,
      name: 'Eyecam Co.',
      new_ad: false,
      featured: false,
      training: 'Full Stack Engineer',
      day: '3w ago',
      schedule: 'Full time',
      site: 'Worldwide',
      tags: ['JavaScript', 'Python', 'Django']
    },
    {
      uid: 1010,
      logo: air,
      name: 'The Air Filter Company',
      new_ad: false,
      featured: false,
      training: 'Front-end Developer',
      day: '1mo ago',
      schedule: 'Part time',
      site: 'Worldwide',
      tags: ['Frontend', 'Junior', 'JavaScript', 'React', 'Sass']
    },

  ]

  const [tab, setTab] = useState([]);
  const [card, setCard] = useState(cards)

  useEffect(() => {
    if (tab.length > 0) {
      setCard(cards.filter((elem) => {
        let cardd = elem.tags
        let c = 0
        for (let i = 0; i < tab.length; i++) {
          if (cardd.find(e => e === tab[i])) {
            c++
          }
        }
        if (c === tab.length) {
          return true
        }
        else {
          return false
        }
      }))
    }
    else {
      setCard(cards)
    }
     // eslint-disable-next-line
  }, [tab])
  return (
    <div className="container">
      <header className="header"></header>
      <section className="wrap">
        {
          tab.length !== 0 && <Search tab={tab} setTab={setTab} />
        }
        {
          card.map((e) => (
            <Card tab={tab} setTab={setTab} key={e.uid} card={e} />
          ))
        }
      </section>
    </div>
  );
}

export default App;
