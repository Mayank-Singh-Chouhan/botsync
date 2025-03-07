import React from 'react';
import application from '../assets/application.svg'
import TabsContainer from '../components/TabsContainer/TabsContainer';
import PersonalDetails from '../components/TabsContainer/application/PersonalDetails';
import ApplicantDetails from '../components/TabsContainer/application/ApplicantDetails';
import LeaseDetails from '../components/TabsContainer/application/LeaseDetails';
import RoommateDetails from '../components/TabsContainer/application/RoommateDetails';
import Document from '../components/TabsContainer/application/Document';
import GurdianInformation from '../components/TabsContainer/application/GuardianInformation';
import RejectApprove from '../components/TabsContainer/application/RejectApprove';

const Application: React.FC = () => {

  const tabs = [
    {
      id: 'Personal details',
      label: 'Personal details',
      panelTitle: 'Personal details',
      content: (
        <PersonalDetails/>
      )
    },
    {
      id: 'Applicant details',
      label: 'Applicant details',
      panelTitle: 'Applicant details',
      content: (
        <ApplicantDetails/>
      )
    },
    {
      id: 'Lease details',
      label: 'Lease details',
      panelTitle: 'Lease details',
      content: (
        <LeaseDetails/>
      )
    },
    {
      id: 'Roommate details',
      label: 'Roommate details',
      panelTitle: 'Roommate details',
      content: (
        <RoommateDetails/>
      )
    },
    {
      id: 'Document',
      label: 'Document',
      panelTitle: 'Document',
      content: (
        <Document/>
      )
    },
    {
      id: 'Guardian information',
      label: 'Guardian information',
      panelTitle: 'Guardian information',
      content: (
        <GurdianInformation/>
      )
    },
    {
      id: 'Reject/Approve',
      label: 'Reject/Approve',
      panelTitle: 'Reject/Approve',
      content: (
        <RejectApprove/>
      )
    }
  ];

  return (
    <div>
      <div className='flex gap-4 mb-7'>
        <img src={application} />
        <h1 className='font-bold text-[16px] text-skyBlue'>Application 001</h1>
      </div>
      <TabsContainer tabs={tabs} defaultTab="overview" paramName="section" />
    </div>
  );
};

export default Application;