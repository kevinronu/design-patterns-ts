import {
  CompressionDecorator,
  EncryptionDecorator,
} from "../../design-patterns/structural-patterns/decorator/decorators/index.mjs";
import { FileDataSource } from "../../design-patterns/structural-patterns/decorator/implementations/index.mjs";
import { DataSource } from "../../design-patterns/structural-patterns/decorator/interfaces/index.mjs";

export default function decoratorDemo(): void {
  // 🧾 Original data to be stored
  const salaryRecords = "Name,Salary\nJohn Smith,100000\nSteven Jobs,912000";

  // 🏗️ Step 1: Create the base data source (simulating a file)
  const fileDataSource = new FileDataSource("output-demo.txt");

  // 🧱 Step 2: Wrap with encryption and compression decorators
  // The order of wrapping matters: Compression -> then Encryption -> then Storage
  const encoded: DataSource = new CompressionDecorator(
    new EncryptionDecorator(fileDataSource)
  );

  // 💾 Step 3: Write the original data through the decorator chain
  encoded.writeData(salaryRecords);

  // 🧼 Step 4: Read the raw stored data directly from the file (still encrypted & compressed)
  const plain = new FileDataSource("output-demo.txt");

  // 🧪 Step 5: Output each stage of the data for clarity
  console.log("- Input ----------------");
  console.log(salaryRecords);

  console.log("- Encoded --------------");
  console.log(plain.readData()); // Shows the Base64 encoded result

  console.log("- Decoded --------------");
  console.log(encoded.readData()); // Shows the original content after full decode
}
