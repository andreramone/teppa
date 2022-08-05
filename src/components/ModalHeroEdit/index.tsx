import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';

import {
  Wrapper,
  Header,
  StyledModal,
  HeaderText,
  CloseButton,
  Content,
  Backdrop,
  ModalFooter,

} from './styles';

import Button from '../Button';
import { Form, Formik } from 'formik';
import { FormBox, TabContainer, TabPanelContainer } from '../../pages/CreateHeroes/styles';
import CustomInput from '../CustomInput';
import { Tab, TabPanel, Tabs } from '../Tabs';
import { schema } from '../../validations/heroes';
import { getHero, updateHeroes } from '../../services/heroes';
import api from '../../services';

export interface ModalProps {
  isShown: boolean;
  headerText?: string;
  confirm: () => void;
  cancel: () => void;
  data: any;
  selectedHero: any;
}

export const ModalHeroEdit: FunctionComponent<ModalProps> = ({
  isShown,
  cancel,
  data,
  selectedHero
}) => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState(0);
  const handleChangeTab = (e: any, value: any) => {
    setActiveTab(value);
  };
  const [hero, setHero] = useState<any>();
  const submitButton = useRef<HTMLButtonElement>(null);


  useEffect(() => {
    const getHeroById = async () => {
      const result = await getHero(selectedHero)
      if (result) {
        setHero(result)
        console.log(hero, `hero`)
      }
      
    }
    getHeroById()
  }, [selectedHero]);
  
  const handleClick = async () => {
      
  };

  const handleChange = (e: any) => {
    return setHero({
      ...hero,
      [e.target.name]: e.target.value,
    });
  };

  async function validate() {
    try {
      await schema.validate(hero, {abortEarly: false}).then(() => {
      })
      return true;
    } catch (err: any) {
      MySwal.fire({
        text: 'Preencha todos os campos necessários',
        confirmButtonColor: '#14834e',
        icon: 'warning',
      });
      return false;
    }
  }

  const handleSubmit = async () => {
    await validate().then(async (valid) => {

      if (valid) {
        await updateHeroes(selectedHero, hero).then(res => {
        })
        MySwal.fire({
          text: 'Cadastro atualizado com sucesso!',
          confirmButtonColor: '#14834e',
        })
        navigate('/hero/list');
      }
        else {
            await MySwal.fire({
              text: 'Erro na atualização do cadastro!',
              confirmButtonColor: '#14834E',
              icon: 'warning',
            });
          }
      })
    }

  return isShown ? (
    <>
      <Backdrop />
      <Wrapper>
        <StyledModal>
          <Header>
            <HeaderText>Editar Herói</HeaderText>
            <CloseButton onClick={cancel}>
              <FaTimes />
            </CloseButton>
          </Header>

          <Content>     
          <TabContainer>
          <Tabs selectedTab={activeTab} onChange={handleChangeTab}>
            <Tab label="Dados do Herói" value={0}/>
            <Tab label="Endereço" value={1}/>
          </Tabs>

          <TabPanelContainer>
            <TabPanel value={activeTab} selectedIndex={0}>
              <Formik
                enableReinitialize
                initialValues={{
                  name: hero.name || ``,
                  email: hero.email || ``,
                  telephone: hero.telephone || ``,
                  cellphone: hero.cellphone || ``,
                  status: hero.status || ``,
                }}
                onSubmit={async (values) => {
                  const {
                    name,
                    email,
                    telephone,
                    cellphone,
                    status,
                  } = values;
                }}
              >
                {(props) => (
                  <Form onSubmit={props.handleSubmit}>
                    <FormBox hasGrid>
                    Dados Gerais
                      <div>
                        <CustomInput
                          text="Nome*"
                          width={280}
                          backgroundColor="#efefef"
                          type="text"
                          onChange={(e) => handleChange(e)}
                          onBlur={props.handleBlur}
                          value={hero.name}
                          name="name"
                        />
                        <CustomInput
                          text="E-mail*"
                          placeholder="email@.com.br"
                          width={280}
                          backgroundColor="#efefef"
                          type="text"
                          onChange={(e) => handleChange(e)}
                          onBlur={props.handleBlur}
                          value={hero.email}
                          name="email"
                        />
                         <CustomInput
                          text="Status*"
                          placeholder="STATUS"
                          width={280}
                          backgroundColor="#efefef"
                          type="text"
                          onChange={(e) => handleChange(e)}
                          onBlur={props.handleBlur}
                          value={hero.status}
                          name="status"
                        />
                        <CustomInput
                          placeholder="(__) _____-____"
                          text="Telefone"
                          width={280}
                          backgroundColor="#efefef"
                          type="text"
                          onChange={(e) => handleChange(e)}
                          onBlur={props.handleBlur}
                          value={hero.telephone!}
                          name="telephone"
                        />
                        <CustomInput
                          placeholder="(__) _____-____"
                          text="Celular"
                          width={280}
                          backgroundColor="#efefef"
                          type="text"
                          onChange={(e) => handleChange(e)}
                          onBlur={props.handleBlur}
                          value={hero.cellphone!}
                          name="cellphone"
                        />
                      </div>
                    </FormBox>
                  </Form>
                )}
              </Formik>
            </TabPanel>

            <TabPanel value={activeTab} selectedIndex={1}>
              <Formik
                enableReinitialize
                initialValues={{
                  address: hero.address || '',
                  complement: hero.complement || '',
                  uf: hero.uf || '',
                  city: hero.city || '',
                  zipcode: hero.zipcode || '',
                  neighborhood: hero.neighborhood || '',

                }}
                onSubmit={handleSubmit}
              >
                {(props) => (
                  <Form onSubmit={props.handleSubmit}>
                    <FormBox hasGrid>
                    Endereço
                      <div>
                        <CustomInput
                          text="Logradouro"
                          width={280}
                          backgroundColor="#efefef"
                          type="text"
                          onChange={(e) => handleChange(e)}
                          onBlur={props.handleBlur}
                          value={hero.address}
                          name="address"
                        />
                        <CustomInput
                          text="Complemento"
                          width={280}
                          backgroundColor="#efefef"
                          type="text"
                          onChange={(e) => handleChange(e)}
                          onBlur={props.handleBlur}
                          value={hero.complement}
                          name="complement"
                        />
                        <CustomInput
                          text="UF"
                          width={280}
                          backgroundColor="#efefef"
                          type="text"
                          onChange={(e) => handleChange(e)}
                          onBlur={props.handleBlur}
                          value={hero.uf}
                          name="uf"
                        />
                        <CustomInput
                          text="Município"
                          width={280}
                          backgroundColor="#efefef"
                          type="text"
                          onChange={(e) => handleChange(e)}
                          onBlur={props.handleBlur}
                          value={hero.city}
                          name="city"
                        />
                        <CustomInput
                          text="CEP*"
                          width={280}
                          backgroundColor="#efefef"
                          type="text"
                          onChange={(e) => handleChange(e)}
                          onBlur={props.handleBlur}
                          value={hero.zipcode}
                          name="zipcode"
                        />
                        <CustomInput
                          text="Bairro"
                          width={280}
                          backgroundColor="#efefef"
                          type="text"
                          onChange={(e) => handleChange(e)}
                          onBlur={props.handleBlur}
                          value={hero.neighborhood}
                          name="neighborhood"
                        />
                      </div>
                    </FormBox>

                  </Form>
                )}
              </Formik>
            </TabPanel>
          </TabPanelContainer>
        </TabContainer>       
          </Content>
          <ModalFooter>
            <Button
              style={{
                fontSize: '18px',
                width: '110px',
                height: '41px',
              }}
              leftSpacing
              onClick={() => handleSubmit()}
            >
              Editar
            </Button>
          </ModalFooter>
        </StyledModal>
        <button
                      type="submit"
                      style={{ display: 'none' }}
                      ref={submitButton}
                    >
                      Submit
                    </button>
      </Wrapper>
    </>
  ) : null;
};
