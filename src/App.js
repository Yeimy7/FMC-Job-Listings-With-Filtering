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

// import {ReactComponent as photosnap} from './images/photosnap.svg'

function App() {

  const cards = [
    {
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
  return (
    <div className="container">
      <header className="header"></header>
      <section className="wrap">
        <Search />
        {
          cards.map((e, index) => (
            <Card key={index} logo={e.logo} name={e.name} new_ad={e.new_ad} featured={e.featured} training={e.training} day={e.day} schedule={e.schedule} site={e.site} tags={e.tags} />
          ))
        }
      </section>
    </div>
  );
}

export default App;
