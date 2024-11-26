import { Props as ContainerProps } from './BaseArticlePage.container';
import { ITranslate } from 'utils/interfaces/general.types';
import Styles from './BaseArticlePage.styled';
import { getColumnWidth, getTableHeaders } from 'utils/helpers/table.helpers';
import { TableWrapper } from 'components/Shared/TableWrapper';
import { TableHeaderData } from 'utils/interfaces/Table.types';
import { Button } from 'components/Button';
import { CustomIcon } from 'components/Icon/CustomIcon';
import { EditPenIcon } from 'assets/icons';
import { useGet } from 'hooks/db/useGet';
import { ArticleService, ComplementService } from 'db/services/app';
import { FilterConfig } from 'utils/interfaces/filters.types';
import { useQueryDBParams } from 'hooks/useQueryDBParams';
import { useMemo } from 'react';

interface Props extends ContainerProps {
    t: ITranslate;
}

const tableHeaders: TableHeaderData[] = [
    {
        key: 'codigoBarras',
        title: 'Codigo de Barras',
        width: 'w-[200px]',
        sort: true,
    },
    {
        key: 'descripcion',
        title: 'Descripcion',
        width: 'w-[300px]',
        sort: true,
    },
    {
        key: 'precioFinal',
        title: 'Coste Final',
        width: 'w-[100px]',
        sort: false,
    },
    {
        key: 'margenGanancia',
        title: 'Ganancia',
        width: 'w-[100px]',
        sort: false,
    },
    {
        key: 'marcaNombre',
        title: 'Marca',
        width: 'w-[100px]',
        sort: true,
    },
    {
        key: 'categoriaDescripcion',
        title: 'Categoria',
        width: 'w-[100px]',
        sort: true,
    },
    {
        key: '',
        title: 'Accion',
        width: 'w-[80px]',
        sort: false,
    },
];

const tableHeadersFormatted = getTableHeaders(tableHeaders, []);

export const BaseArticlePage = (_props: Props) => {
    // const {  } = props;

    const { queryFilter, handleSetFilter } = useQueryDBParams({
        page: 1,
        setPage: () => {},
        pageSize: 200,
    });

    const { data } = useGet({
        name: 'Articles - GetBaseArticles',
        queryFilter,
        endpoint: () => ArticleService.getArticulosBase(queryFilter.slice(19)),
        enabled: queryFilter.length > 10,
    });

    const { data: marcaOptionsList } = useGet({
        name: 'Complements - GetMarcas',
        endpoint: () => ComplementService.getMarcas(),
    });

    const { data: categoriaOptionsList } = useGet({
        name: 'Complements - GetCategorias',
        endpoint: () => ComplementService.getCategorias(),
    });

    const queryFiltersSettings: FilterConfig[] = useMemo(
        () => [
            { key: 'codigoBarra', type: 'text', label: 'Codigo de Barras' },
            {
                key: 'marca',
                type: 'select',
                label: 'Marca',
                containerStyles: 'ml-4 w-28',
                selectProperties: {
                    defaultValue: {
                        value: null,
                        label: '',
                    },
                    options:
                        marcaOptionsList?.data?.map(item => ({
                            value: item.nombre,
                            label: item.nombre,
                        })) || [],
                },
            },
            {
                key: 'categoria',
                type: 'select',
                label: 'Categoria',
                containerStyles: 'ml-4 w-28',
                selectProperties: {
                    defaultValue: {
                        value: null,
                        label: '',
                    },
                    options:
                        categoriaOptionsList?.data?.map(item => ({
                            value: item.descripcion,
                            label: item.descripcion,
                        })) || [],
                },
            },
        ],
        [marcaOptionsList, categoriaOptionsList],
    );

    return (
        <section className={Styles.container}>
            <div className="flex justify-between items-center">
                <h1 className="typography-h4">Articulos Base</h1>
                <Button
                    text={'Nuevo Articulo'}
                    size="large"
                    type="button"
                    variant="primary"
                    onClick={() => {}}
                />
            </div>

            <TableWrapper
                tableHeaders={tableHeadersFormatted}
                tableData={data?.data || []}
                hasPagination
                paginationSettings={{ page: 1, setPage: () => {} }}
                hasFilters
                filterSettings={{
                    filters: queryFiltersSettings,
                    handleSetFilter,
                    hasSearch: true,
                }}>
                {sortedData =>
                    sortedData.map((data, index) => (
                        <tr key={index} className={Styles.table.row}>
                            <td
                                className={`${Styles.table.dataCell} font-medium`}
                                style={getColumnWidth(tableHeaders[0].width)}>
                                {data?.codigoBarras}
                            </td>
                            <td
                                className={Styles.table.dataCell}
                                style={getColumnWidth(tableHeaders[1].width)}>
                                {data?.descripcion}
                            </td>
                            <td
                                className={Styles.table.dataCell}
                                style={getColumnWidth(tableHeaders[2].width)}>
                                {data?.precioFinal !== null
                                    ? `$ ${data.precioFinal.toFixed(2)}`
                                    : '-'}
                            </td>
                            <td
                                className={Styles.table.dataCell}
                                style={getColumnWidth(tableHeaders[3].width)}>
                                {data.margenGanancia * 100 + '%'}
                            </td>
                            <td
                                className={Styles.table.dataCell}
                                style={getColumnWidth(tableHeaders[4].width)}>
                                {data.marcaNombre}
                            </td>
                            <td
                                className={Styles.table.dataCell}
                                style={getColumnWidth(tableHeaders[5].width)}>
                                {data.categoriaDescripcion}
                            </td>
                            <td
                                className={Styles.table.dataCell}
                                style={getColumnWidth(tableHeaders[2].width)}>
                                <Button
                                    variant="transparent"
                                    onClick={() => {}}
                                    customStyles="-ml-2">
                                    <CustomIcon color="black" Icon={EditPenIcon} />
                                </Button>
                            </td>
                        </tr>
                    ))
                }
            </TableWrapper>
        </section>
    );
};
