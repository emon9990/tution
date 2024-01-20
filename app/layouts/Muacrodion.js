import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function Muacrodion() {
  return (
    <div>
      <Accordion className="border border-[#E8E8E8] mt-7">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="text-[#000000] text-[27px] font-semibold"
        >
          কিভাবে টিউটর খুঁজবেন ?
        </AccordionSummary>
        <AccordionDetails className="text-[#515151] text-[19px] font-bn">
        আপনার যোগ্যতা অনুযায় একটি টিউশন বেছে নিন এবং তারপরে অভিভাবকের সাথে কথা বলে ঠিক করে ফেলুন।
        </AccordionDetails>
      </Accordion>
      <Accordion className="bg-[#F8F8F8] shadow-lg mt-4">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"

          className="text-[#000000] text-[27px] font-semibold font-bn"
        >
         কিভাবে টিউশন খুঁজবেন ?
        </AccordionSummary>
        <AccordionDetails className="text-[#515151] text-[19px] font-bn">
        আপনার যোগ্যতা অনুযায় একটি টিউশন বেছে নিন এবং তারপরে অভিভাবকের সাথে কথা বলে ঠিক করে ফেলুন।
        </AccordionDetails>
      </Accordion>
      <Accordion className=" border border-[#E8E8E8] mt-4" defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"

          className="text-[#000000] text-[27px] font-semibold font-bn"
        >
          এখানে থাকা সমস্ত টিউশন কি কমিশন মুক্ত ? 
        </AccordionSummary>
        <AccordionDetails className="text-[#515151] text-[19px] font-bn">
        আপনার যোগ্যতা অনুযায় একটি টিউশন বেছে নিন এবং তারপরে অভিভাবকের সাথে কথা বলে ঠিক করে ফেলুন।
        </AccordionDetails>
        
      </Accordion>
    </div>
  );
}