import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DropDown from './DropDown';
import AllCrads from './pages/AllCrads';





const SampleData = [

    {
        data: [
        {
        name: 'Mixmax',
        budget_name: 'Software subscription',
        owner_id: 1,
        spent: {
        value: 100,
        currency: "SGD"
        },
        available_to_spend: {
        value: 1000,
        currency: "SGD"
        },
        card_type: "burner",
        expiry: '9 feb',
        limit: 100,
        status: 'active'
        },
        {
        name: 'Quickbooks’',
        budget_name: 'Software subscription',
        owner_id: 2,
        spent: {
        value: 50,
        currency: "SGD"
        },
        available_to_spend: {
        value: 250,
        currency: "SGD"
        },
        card_type: "subscription",
        limit: 10,
        status: 'active'
        }
        ],
        page: 1,
        per_page: 10,
        total: 100
        }
        
]







export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="your" value="1" />
            <Tab label="all" value="2" />
            <Tab label="blocked" value="3" />
          </TabList>
        </Box>
        
        <TabPanel value="1"><DropDown SampleData={SampleData} /></TabPanel>
        <TabPanel value="2"><AllCrads SampleData={SampleData}/></TabPanel>
        <TabPanel value="3">no blocked cards</TabPanel>
      </TabContext>
   
    </Box>
  );
}