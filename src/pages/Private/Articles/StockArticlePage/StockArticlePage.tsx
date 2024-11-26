import { Props as ContainerProps } from './StockArticlePage.container';
import { ITranslate } from 'utils/interfaces/general.types';
import Styles from './StockArticlePage.styled';
import { useGet } from 'hooks/db/useGet';
import { ArticleService } from 'db/services/app';
import { TableHeaderData } from 'utils/interfaces/Table.types';
import { getColumnWidth, getTableHeaders } from 'utils/helpers/table.helpers';
import { TableWrapper } from 'components/Shared/TableWrapper';
import { StockArticlesAdapter } from 'db/adapters/Articles.adapter';

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
        key: 'marca',
        title: 'Marca',
        width: 'w-[100px]',
        sort: false,
    },
    {
        key: 'margenGanancia',
        title: 'Categoria',
        width: 'w-[100px]',
        sort: false,
    },
    {
        key: 'marcaNombre',
        title: 'Tipo de Talle',
        width: 'w-[100px]',
        sort: true,
    },
    {
        key: 'categoriaDescripcion',
        title: 'Talle',
        width: 'w-[100px]',
        sort: true,
    },
    {
        key: 'categoriaDescripcion',
        title: 'Color',
        width: 'w-[100px]',
        sort: true,
    },
];

const tableHeadersFormatted = getTableHeaders(tableHeaders, []);

export const StockArticlePage = (_props: Props) => {
    // const {  } = props;

    const { data } = useGet({
        name: 'Articles - GetStockArticles',
        endpoint: () => ArticleService.getArticulosStock(),
        adapter: data => StockArticlesAdapter(data),
    });

    return (
        <section className={Styles.container}>
            <div className="flex justify-between items-center">
                <h1 className="typography-h4">Articulos en Stock</h1>
            </div>

            <TableWrapper
                tableHeaders={tableHeadersFormatted}
                tableData={data?.data || []}
                hasPagination
                paginationSettings={{ page: 1, setPage: () => {} }}>
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
                                {data?.marca}
                            </td>
                            <td
                                className={Styles.table.dataCell}
                                style={getColumnWidth(tableHeaders[3].width)}>
                                {data.categoria}
                            </td>
                            <td
                                className={Styles.table.dataCell}
                                style={getColumnWidth(tableHeaders[4].width)}>
                                {data.tipoTalle}
                            </td>
                            <td
                                className={Styles.table.dataCell}
                                style={getColumnWidth(tableHeaders[5].width)}>
                                {data.talle}
                            </td>
                            <td
                                className={Styles.table.dataCell}
                                style={getColumnWidth(tableHeaders[6].width)}>
                                {data.color}
                            </td>
                        </tr>
                    ))
                }
            </TableWrapper>
        </section>
    );
};
