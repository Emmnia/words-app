import { Controller } from 'react-hook-form';
import { TableInput, TableError } from './Table.styled';

export const TableInputField = ({ control, name, rules, trigger }) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field, fieldState }) => (
                <>
                    <TableInput
                        type="text"
                        {...field}
                        onChange={(e) => {
                            field.onChange(e.target.value);
                            trigger(name);
                        }}
                    />
                    {fieldState.error && <TableError>{fieldState.error.message}</TableError>}
                </>
            )}
        />
    )
}
