import React, { useState, useEffect } from 'react';
import {
  FaTrash,
  FaPen,
  FaRegPlusSquare,
  FaSearch,
  FaFileContract,
  FaUsers,
} from 'react-icons/fa';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';

import Swal from 'sweetalert2';
import { AppDispatch, RootState } from '../../redux/store';
import { selectRow, wipeSelection } from '../../redux/slices/table';
import {
  Container,
  Content,
  Table,
  TableWrapper,
  ButtonModal,
  CrudWrapper,
  RegistrosWrapper,
  TableOverflow,
  TopContent,
  TitleAgent,
  Th,
  Td,
  Trow,
} from './styles'
import SelectableTableRow from '../../components/SelectableTableRow/index'
import { ModalHeroEdit} from '../../components/ModalHeroEdit'
// import PartnerOfficeEdit from '../PartnerOfficeEdit'
import { allHeroes } from '../../services/heroes';
import axios from 'axios';
import CreateHeroes from '../CreateHeroes';
import api from '../../services';


const HeroesListing: React.FC = () => {
  const [canEdit, setCanEdit] = useState(false)
  const [heroesList, setHeroesList] =
    useState<any>([{
      name: '',
      email: '',
      status: '',
      created_at: '',
      map: '',
      length: 0,
      find: undefined,
      id: '',
    }])
    const [isShown, setIsShown] = useState<boolean>(false)
    const [selectedHero, setSelectedHero] = useState<any>('')
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
      const heroesListing = async () => {
        const result = await allHeroes()
        if (result) {
          setHeroesList(result);
        }
      }
      heroesListing()
    }, []);


    useEffect(() => {
      dispatch(wipeSelection())
    }, [dispatch]);


  const toggle = () => setIsShown(!isShown)

  const handleCreate = () => {
    setCanEdit(!canEdit);
  }


  async function handleDelete(id: number) {
    if (id) {
      await Swal.fire({
        title: 'Deseja apagar este Herói?',
        text: 'Aviso: Após apagado não poderá ser recuperado.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#14834e',
        cancelButtonColor: '#909391',
        confirmButtonText: 'Apagar',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          api.delete(`hero/${selectedHero.id}`).then((res) => {
            console.log(res.status)
            if (res.status === 200) {
              Swal.fire({
                icon: 'success',
                text: 'Apagado com sucesso!',
                confirmButtonColor: '#14834e',
              });
              const filteredHero = heroesList.filter(
                (hero: { id: number }) => {
                  return hero.id !== id;

                },
                );
                setHeroesList(filteredHero);
            }
          });
          dispatch(wipeSelection());
          setSelectedHero('');
        }
      });
    }
  }

  return !canEdit ? (
    <>
      <ModalHeroEdit
        data={heroesList}
        isShown={isShown}
        confirm={toggle}
        cancel={toggle}
        selectedHero={selectedHero.id}
      />
      <Container>
        <Content>
          <TopContent>
            <TitleAgent>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10}}>
                <FaUsers style={{ marginRight: 16 }} />
                Lista de Heróis cadastrados da S.H.I.E.L.D
              </div>
            </TitleAgent>
          </TopContent>

          <RegistrosWrapper>
            <p> {heroesList.length} registro(s) encontrado(s)</p>
          </RegistrosWrapper>
          <TableWrapper>
            <CrudWrapper>
              <div style={{background: 'white', borderRadius: '4px', display: 'flex', marginLeft: '10px'}}>
                <ButtonModal value="editar" onClick={() => handleCreate()}>
                  <FaPen /> Cadastrar
                </ButtonModal>

                <ButtonModal onClick={toggle}>
                    <FaRegPlusSquare /> Editar
                  </ButtonModal>
                <ButtonModal
                  value="Deletar"
                  onClick={() => handleDelete(selectedHero.id)}
                >
                  <FaTrash /> Deletar
                </ButtonModal>
                </div>
 
              </CrudWrapper>
              <TableOverflow>
                <Table>
                  <Trow>
                    <Th>Nome</Th>
                    <Th>Email</Th>
                    <Th>Status</Th>
                    <Th>Data de Cadastro</Th>
                  </Trow>
                  {heroesList.length > 0
                    ? heroesList
                        .map((row: any) => (
                          <SelectableTableRow
                          rowId={row.id}
                          rowProps={Trow.getRowProps}
                          key={row.id}
                          onClick={() => {
                              dispatch(selectRow(row.id));
                              setSelectedHero(row);
                            }}
                          >
                            <Td>{row.name}</Td>
                            <Td>{row.email}</Td>
                            <Td style={{fontWeight: 'bold'}} statusColor={row.status}>{row.status}</Td>
                            <Td>{moment(row.created_at).format('DD/MM/YYYY')}</Td>
                          </SelectableTableRow>
                        ))
                    : null}
                </Table>
            </TableOverflow>
          </TableWrapper>
        </Content>
      </Container>
    </>
  ) : (
    <CreateHeroes selectedHero={selectedHero.email} setCanEdit={setCanEdit} />
  );
};
export default HeroesListing;
