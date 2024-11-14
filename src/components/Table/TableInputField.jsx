import { Controller } from 'react-hook-form';
import { TableInput, TableError } from './Table.styled';

export const TableInputField = ({ control, name, rules, trigger, value }) => {
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
                            field.onChange(e);
                            trigger(name);
                        }}
                        value={value}
                    />
                    {fieldState.error && <TableError>{fieldState.error.message}</TableError>}
                </>
            )}
        />
    )
}
