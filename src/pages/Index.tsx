
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Sparkles, History, User } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSummarize = async () => {
    if (!inputText.trim()) {
      toast({
        title: "Please enter some text",
        description: "Add the academic text you'd like to summarize.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Placeholder for OpenAI integration - will be implemented after Supabase connection
    setTimeout(() => {
      setSummary("This is a placeholder summary. Connect to Supabase to enable AI-powered summarization with OpenAI!");
      setIsLoading(false);
      toast({
        title: "Summary generated!",
        description: "Your text has been successfully summarized.",
      });
    }, 2000);
  };

  const clearAll = () => {
    setInputText("");
    setSummary("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-blue-600 rounded-lg">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Easy Summarizer</h1>
                <p className="text-sm text-gray-600">AI-powered academic text summarization</p>
              </div>
            </div>
            <Button variant="outline" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="summarize" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="summarize" className="flex items-center space-x-2">
              <Sparkles className="h-4 w-4" />
              <span>Summarize</span>
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center space-x-2">
              <History className="h-4 w-4" />
              <span>History</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="summarize" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Input Section */}
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <span>Input Text</span>
                  </CardTitle>
                  <CardDescription>
                    Paste your academic text, research paper, or any lengthy content you'd like to summarize.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea
                    placeholder="Paste your academic text here... (minimum 100 characters recommended for best results)"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="min-h-[300px] resize-none"
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {inputText.length} characters
                    </span>
                    <div className="flex space-x-2">
                      <Button variant="outline" onClick={clearAll}>
                        Clear
                      </Button>
                      <Button 
                        onClick={handleSummarize} 
                        disabled={isLoading}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        {isLoading ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Summarizing...
                          </>
                        ) : (
                          <>
                            <Sparkles className="h-4 w-4 mr-2" />
                            Summarize
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Output Section */}
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Sparkles className="h-5 w-5 text-green-600" />
                    <span>Summary</span>
                  </CardTitle>
                  <CardDescription>
                    Your AI-generated summary will appear here.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {summary ? (
                    <div className="space-y-4">
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-gray-800 leading-relaxed">{summary}</p>
                      </div>
                      <div className="flex justify-end">
                        <Button variant="outline" size="sm">
                          Copy Summary
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-[300px] text-center">
                      <div className="p-4 bg-gray-100 rounded-full mb-4">
                        <FileText className="h-8 w-8 text-gray-400" />
                      </div>
                      <p className="text-gray-500 mb-2">No summary yet</p>
                      <p className="text-sm text-gray-400">
                        Enter your text and click "Summarize" to get started
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Features Section */}
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="p-3 bg-white/20 rounded-full w-fit mx-auto mb-3">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-2">AI-Powered</h3>
                    <p className="text-sm opacity-90">
                      Advanced OpenAI technology for accurate, contextual summaries
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="p-3 bg-white/20 rounded-full w-fit mx-auto mb-3">
                      <FileText className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-2">Academic Focus</h3>
                    <p className="text-sm opacity-90">
                      Optimized for research papers, articles, and academic content
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="p-3 bg-white/20 rounded-full w-fit mx-auto mb-3">
                      <History className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-2">Save History</h3>
                    <p className="text-sm opacity-90">
                      Keep track of all your summaries for future reference
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Summary History</CardTitle>
                <CardDescription>
                  View and manage your previous summaries.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center h-[400px] text-center">
                  <div className="p-4 bg-gray-100 rounded-full mb-4">
                    <History className="h-8 w-8 text-gray-400" />
                  </div>
                  <p className="text-gray-500 mb-2">No summaries yet</p>
                  <p className="text-sm text-gray-400 mb-4">
                    Connect to Supabase to enable summary history and user accounts
                  </p>
                  <Button variant="outline">
                    Connect Supabase
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-blue-200 mt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-gray-600">
            <p className="text-sm">
              Built with ❤️ using React, Tailwind CSS, and OpenAI • 
              <span className="ml-1">Perfect for students and researchers</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
