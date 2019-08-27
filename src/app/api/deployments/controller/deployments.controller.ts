import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { CreateDeploymentDto, ReadDeploymentDto } from '../dto'
import { DeploymentsService } from '../services'

@Controller('deployments')
export class DeploymentsController {

  constructor(private readonly deploymentsService: DeploymentsService) {}

  @Post()
  public async createDeployment(
    @Body() createDeploymentDto: CreateDeploymentDto
  ): Promise<ReadDeploymentDto> {

    return await this.deploymentsService.createDeployment(createDeploymentDto)
  }

  @Get()
  public async getDeployments(): Promise<ReadDeploymentDto[]> {
    return await this.deploymentsService.getDeployments()
  }

  @Get(':id')
  public async getDeploymentById(@Param('id') id: string): Promise<ReadDeploymentDto> {
    return await this.deploymentsService.getDeploymentById(id)
  }
}
