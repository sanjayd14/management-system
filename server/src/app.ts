import express, { Request, Response } from 'express';
import { InitializationService } from './service/IntializationService';
import {AppDataSource} from './database/connectTodb';
import { userRouter } from './routers/UserRouter';
import { ordersRouter } from './routers/OrdersRouter';
import { incomeRouter } from './routers/IncomeRouter';
import { expenseRouter } from './routers/ExpenseRouter';
import { clientRouter } from './routers/ClientRouter';

const app=express();
const PORT = 3000;
InitializationService.init();

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
app.use(express.json());
app.use('/users',userRouter)
app.use('/client',clientRouter)
app.use('/orders',ordersRouter)
app.use('/income',incomeRouter)
app.use('/expense',expenseRouter)


app.get('/dbconn', async (req: Request, res: Response) => {
  try {
    const result = await AppDataSource.query('SELECT * FROM users LIMIT 1');
    res.status(200).json({ message: '✅ DB connected. Sample query successful.', data: result });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: '❌ DB connection/query failed.', error: error.message });
    } else {
      res.status(500).json({ message: '❌ Unknown error occurred.' });
    }
  }
});