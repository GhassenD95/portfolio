import { Helmet } from 'react-helmet-async';
import { Contact } from '../components/sections/Contact';

export default function ContactPage() {
  return (
    <div className="page-enter">
      <Helmet>
        <title>Contact | Ghassen Dhaoui</title>
      </Helmet>
      <Contact />
    </div>
  );
}
