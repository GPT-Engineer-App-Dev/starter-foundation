import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Index = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', inputValue);
    setInputValue('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">My App</h1>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Welcome</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Enter something..."
                value={inputValue}
                onChange={handleInputChange}
              />
              <Button type="submit">Submit</Button>
            </form>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2023 My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;