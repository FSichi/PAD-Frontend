import { Button } from 'components/Button';
import { SelectInput } from 'components/Inputs/SelectInput';
import { TextInput } from 'components/Inputs/TextInput';
import { DrawerHeader } from 'components/Shared/DrawerHeader';
import {
    CategoriaRequest,
    ColorRequest,
    MarcaRequest,
    TipoTalleRequest,
    TalleRequest,
} from 'db/interfaces/Complements';
import { ComplementService } from 'db/services/app';
import { useAction } from 'hooks/db/useAction';
import { useGet } from 'hooks/db/useGet';
import { useDrawer } from 'hooks/useDrawer';
import { useForm } from 'hooks/useForm';
import toast from 'react-hot-toast';
import { getCreateComplementBody } from 'utils/helpers/complementsHelper';
import { ComplementType, SelectOption, SelectOptionType } from 'utils/interfaces/general.types';

interface Props {
    type: ComplementType;
    itemId: number;
    otherInfo?: {
        idTipoTalle: number;
        descripcion: string;
    };
}

interface IFormData {
    name: string;
    tipoTalle?: SelectOption;
}

const title = {
    color: 'Nuevo Color',
    categoria: 'Nueva Categoria',
    marca: 'Nueva Marca',
    talle: 'Nuevo Talle',
    tipoTalle: 'Nuevo Tipo de Talle',
};

const endpointsType = {
    color: (body: ColorRequest) => ComplementService.createColor(body),
    categoria: (body: CategoriaRequest) => ComplementService.createCategoria(body),
    marca: (body: MarcaRequest) => ComplementService.createMarca(body),
    talle: (body: TalleRequest) => ComplementService.createTalle(body),
    tipoTalle: (body: TipoTalleRequest) => ComplementService.createTipoTalle(body),
};

export const NewItem = ({ type, itemId }: Props) => {
    const { CloseDrawer } = useDrawer();

    const { data: tipoTallesList } = useGet({
        name: 'Complements - GetTipoTalles',
        endpoint: () => ComplementService.getTipoTalles(),
    });

    const { mutate } = useAction<any, any>({
        name: 'Complements - Create',
        endpoint: endpointsType[type],
    });

    const handleCreateComplement = (formData: IFormData) => {
        const body = getCreateComplementBody(type, itemId, formData);
        mutate(body, {
            onSuccess: () => {
                toast.success('Complemento Creado con Exito');
                CloseDrawer();
            },
        });
    };

    const { formData, handleChange, handleSubmit, isEdited } = useForm<IFormData>({
        submitAction: () => handleCreateComplement(formData),
    });

    return (
        <div className="px-4">
            <DrawerHeader title={title[type]} />
            <form onSubmit={e => handleSubmit(e)} className="flex flex-col gap-6 mt-4">
                <TextInput
                    name="name"
                    inputType="text"
                    label={type === 'talle' ? 'Descripcion' : 'Nombre'}
                    containerStyles="w-full"
                    onChange={(value: string) => handleChange('name', value)}
                    value={formData.name}
                />

                {type === 'talle' && (
                    <SelectInput
                        label={'Tipo de Talle'}
                        options={
                            tipoTallesList?.data.map(tipoTalle => ({
                                label: tipoTalle.descripcion,
                                value: tipoTalle.idTipoTalle,
                            })) || []
                        }
                        value={formData.tipoTalle}
                        onChange={(value: SelectOptionType) =>
                            handleChange('tipoTalle', value as SelectOption)
                        }
                        containerStyles=" w-full z-40"
                        menuSize={385}
                    />
                )}

                <Button
                    customStyles="w-full"
                    type="submit"
                    size="large"
                    disabled={!isEdited}
                    text="Guardar"
                />
            </form>
        </div>
    );
};
