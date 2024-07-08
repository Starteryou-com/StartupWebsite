import React from 'react';
import Navibar from '../components/Navibar';
import { Container } from 'react-bootstrap';
import '../App.css';
import JobsList from '../components/JobsList';
import Footer from '../components/Footer';

const Joblistingpage: React.FC = () => {
  return (
    <Container className="Joblistingpage mt-5 pt-5">
      <Navibar />
      <h1>This is Job listing page</h1>
      <JobsList />
      <Footer />
    </Container>
  );
}

export default Joblistingpage;
