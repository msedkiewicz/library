import { Controller, Post, Body } from "@nestjs/common";

@Controller()
export class LendingController {
    private users = {};
    @Post('borrow')
    borrow(@Body() { isbn }: BorrowDto) {
        const 
    }
}