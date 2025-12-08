import { firebaseAuth } from "../middlewares/firebase-auth.middleware";

router.post("/", firebaseAuth, controller.createLote);

