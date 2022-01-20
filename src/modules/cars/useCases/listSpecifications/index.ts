import { SpecificationRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

const specificationsRepository = SpecificationRepository.getInstance();
const listSpecificationUseCase = new ListSpecificationsUseCase(
    specificationsRepository
);
const listSpecificationsController = new ListSpecificationsController(
    listSpecificationUseCase
);

export { listSpecificationsController };
