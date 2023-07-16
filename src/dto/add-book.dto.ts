import { IsString, IsNumberString, validate } from 'class-validator';

export class AddBookDto {
  @IsNumberString()
  isbn: string;
  @IsString()
  title: string;
  @IsString()
  author: string;
}

const dto = new AddBookDto();
const error = validate(dto);
