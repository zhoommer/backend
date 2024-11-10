import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InitializeService {
  constructor(private prisma: PrismaService) {}

  async initialize(userId: number): Promise<any> {
    try {
      const init = await this.prisma.userDetail.findUnique({
        where: {
          userId: userId,
        },
      });
      const splitedName: string[] = init.firstname.split(' ');
      const firtChar: string = splitedName[0].at(0);
      const secondChar: string = splitedName[1]?.at(0);
      const lastChar: string = init.lastname.at(0);
      return {
        initials: firtChar + secondChar + lastChar,
        firstname: init.firstname,
        lastname: init.lastname,
        gender: init.gender,
      };
    } catch (error: any) {
      throw new ForbiddenException({
        message: error,
        data: null,
      });
    }
  }
}
