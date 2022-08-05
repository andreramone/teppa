import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {
  Content,
  TopContainer,
  LeftTopContainer,
  RightTopContainer,
  TabContainer,
  Form,
  Container,
  FormBox,
  TabPanelContainer,
} from './styles';
import {Tab, Tabs, TabPanel} from '../../components/Tabs'
import CustomModal from '../../components/CustomModal';
import { FaUserTie } from 'react-icons/fa';
import CustomButton from '../../components/CustomButton';
import { Formik } from 'formik';
import CustomInput from '../../components/CustomInput';
import CustomMaskedInput from '../../components/CustomMaskedInput';
import {schema} from '../../validations/heroes'
import { IHeroesDTO, IHeroesListDTO, IHeroesEdit} from '../../dtos/heroesDto'
import { createHero, updateHeroes } from '../../services/heroes'


const CreateHeroes: React.FC<any> = ({
  heroesEmail,
  setCanEdit,
}: IHeroesEdit) => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const [heroes, setHeroes] = useState<IHeroesDTO | any>({
    name: '',
    email: '',
    cellphone: '',
    telephone: '',
    status: 'ATIVO',
    address: '',
    complement: '',
    neighborhood: '',
    city: '',
    uf: '',
    zipcode: '',
  });

  const [activeTab, setActiveTab] = useState(0);

  const handleChangeTab = (e: any, value: any) => {
    setActiveTab(value);
  };

  const submitButton = useRef<HTMLButtonElement>(null);


  async function validate() {
    try {
      await schema.validate(heroes, {abortEarly: false}).then(() => {
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

  const handleChange = async (e: any) => {
    return setHeroes({
      ...heroes,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {

    const validation = await validate()
      if (validation) {
        await createHero(heroes).then(res => {
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
      }
    


  return (

    <Container>
      <Content>
        <TopContainer style={{background: 'white', borderRadius: '8px'}}>
          <LeftTopContainer>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20, background: 'white' }}>
              <FaUserTie style={{ marginRight: 16 }} />
              Cadastro de Heróis
            </div>
            <span>{'Lista de Heróis > Cadastrar'}</span>
          </LeftTopContainer>
          <RightTopContainer>
              <CustomButton
                width={120}
                height={38}
                radius={8}
                backgroundColor="#909391"
                color="#fff"
                marginRight={24}
                onClick={() => {navigate('/hero/list')}}
              >
                Cancelar
              </CustomButton>
              <CustomButton
                width={120}
                height={38}
                radius={8}
                marginRight={10}
                backgroundColor="#14834E"
                color="#fff"
                ref={submitButton}
                onClick={() => {
                  submitButton.current!.click();
                }}
              >
                Salvar
              </CustomButton>
            </RightTopContainer>
        </TopContainer>

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
                  name: heroes.name || '',
                  email: heroes.email || '',
                  telephone: heroes.telephone || '',
                  cellphone: heroes.cellphone || '',
                  status: heroes.status || '',
                }}
                onSubmit={async (values, actions) => {
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
                          value={props.values.name}
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
                          value={props.values.email}
                          name="email"
                        />

                          <CustomInput
                          text="Status*"
                          placeholder="ATIVO"
                          width={280}
                          backgroundColor="#efefef"
                          type="text"
                          onChange={(e) => handleChange(e)}
                          onBlur={props.handleBlur}
                          value={props.values.status}
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
                          value={props.values.telephone!}
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
                          value={props.values.cellphone!}
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
                  address: heroes.address || '',
                  complement: heroes.complement || '',
                  uf: heroes.uf || '',
                  city: heroes.city || '',
                  zipcode: heroes.zipcode || '',
                  neighborhood: heroes.neighborhood || '',

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
                          value={props.values.address}
                          name="address"
                        />
                        <CustomInput
                          text="Complemento"
                          width={280}
                          backgroundColor="#efefef"
                          type="text"
                          onChange={(e) => handleChange(e)}
                          onBlur={props.handleBlur}
                          value={props.values.complement}
                          name="complement"
                        />
                        <CustomInput
                          text="UF"
                          width={280}
                          backgroundColor="#efefef"
                          type="text"
                          onChange={(e) => handleChange(e)}
                          onBlur={props.handleBlur}
                          value={props.values.uf}
                          name="uf"
                        />
                        <CustomInput
                          text="Município"
                          width={280}
                          backgroundColor="#efefef"
                          type="text"
                          onChange={(e) => handleChange(e)}
                          onBlur={props.handleBlur}
                          value={props.values.city}
                          name="city"
                        />
                        <CustomInput
                          text="CEP*"
                          width={280}
                          backgroundColor="#efefef"
                          type="text"
                          onChange={(e) => handleChange(e)}
                          onBlur={props.handleBlur}
                          value={props.values.zipcode}
                          name="zipcode"
                        />
                        <CustomInput
                          text="Bairro"
                          width={280}
                          backgroundColor="#efefef"
                          type="text"
                          onChange={(e) => handleChange(e)}
                          onBlur={props.handleBlur}
                          value={props.values.neighborhood}
                          name="neighborhood"
                        />
                      </div>
                    </FormBox>
                    <button
                      type="submit"
                      style={{ display: 'none' }}
                      ref={submitButton}
                    >
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>
            </TabPanel>
          </TabPanelContainer>
        </TabContainer>
      </Content>

      <CustomModal message="Requisição inválida" status="warning" noMargin />

    </Container>
  );
};

export default CreateHeroes;