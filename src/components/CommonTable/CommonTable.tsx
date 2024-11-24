import { DropdownArrowIcon, OrderTableIcon } from 'assets/icons';
import { Props as ContainerProps } from './CommonTable.container';
import { Styles } from './CommonTable.styled';
import './styles.css';
import { ITranslate } from 'utils/interfaces/general.types';
import { CustomIcon } from 'components/Icon/CustomIcon';

interface Props<T> extends ContainerProps<T> {
    t: ITranslate;
}

export const CommonTable = <T,>(props: Props<T>) => {
    const { TableStyles, children, tableHeaders, handleSort, sortColumn, sortDirection } = props;

    const St = TableStyles || Styles;

    return (
        <section className="overflow-x-scroll table-scrollbar">
            <table className={`w-full overflow-x-scroll z-20 border border-[#F6F6F6]`}>
                <thead>
                    <tr>
                        {tableHeaders.map(({ title, key, width, sort }) => (
                            <th
                                key={key}
                                className={St({ width }).header}
                                onClick={() => (sort ? handleSort(key as keyof T) : null)}
                                style={{ cursor: sort ? 'pointer' : 'default' }}>
                                <div className="flex items-center">
                                    <p>{title}</p>
                                    {key !== '' && sort && (
                                        <CustomIcon
                                            Icon={
                                                key === sortColumn
                                                    ? DropdownArrowIcon
                                                    : OrderTableIcon
                                            }
                                            size={13}
                                            color={key === sortColumn ? '#B871FF' : '#64748B'}
                                            className={`ml-1 ${key === sortColumn && sortDirection === 'asc' && 'rotate-180'}`}
                                        />
                                    )}
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>{children}</tbody>
            </table>
        </section>
    );
};
