import { FieldBase } from './fieldbase';

export class TextBox extends FieldBase<string> {
    controlType = 'textBox';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}
