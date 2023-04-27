
import {
  AccordionHeader,  
  ContentAccordionText,
  TitleAccordion,
  ContentAccordionView
} from "./styles";
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
  
export default function AccordionFooterOption(props) {

    const [open, setOpen] = useState(false);

    const navigation = useNavigation();

    function toggleAccordion() {
      setOpen(!open);
    }
  
    const body = <ContentAccordionView><ContentAccordionText>{ props.content }</ContentAccordionText></ContentAccordionView>;

    return (    
      <>
        <AccordionHeader onPress={toggleAccordion}>
          <TitleAccordion>TESTE</TitleAccordion>
        </AccordionHeader>
        { open && body }
      </>
    );
  }
  